import GeoFilter from "./geoFilter";
import GeoFilterItem from "./geoFilterItem";

class GeoRangeFilter extends GeoFilter {
    constructor(filterItems) {
        super(filterItems);
        this.ranges = [];
        this.allowedValues = [];
        this.disallowedValues = [];
    }

    initializeCore() {
        this.filterItems.sort((a, b) => +a.value - +b.value);
        for (let i = 0; i < this.filterItems.length; i++) {
            let filterItem = this.filterItems[i];
            this.key = filterItem.key;
            let value = +filterItem.value;
            switch (filterItem.operator) {
                case ">":
                    this.ranges.push([value + 0.00001, Number.POSITIVE_INFINITY]);
                    break;
                case ">=":
                    this.ranges.push([value, Number.POSITIVE_INFINITY]);
                    break;
                case "!=":
                    this.disallowedValues.push(value);
                    break;
                case "=":
                    this.allowedValues.push(value);
                    break;
            }
        }

        for (let i = 0; i < this.filterItems.length; i++) {
            let filterItem = this.filterItems[i];
            let value = +filterItem.value;
            let range = GeoRangeFilter.getRange(this.ranges, value);
            switch (filterItem.operator) {
                case "<":
                    if (range) {
                        range[1] = value + 0.00001;
                    }
                    else {
                        range = [Number.NEGATIVE_INFINITY, value + 0.00001];
                        this.ranges.push(range);
                    }
                    break;
                case "<=":
                    if (range) {
                        range[1] = value;
                    }
                    else {
                        range = [Number.NEGATIVE_INFINITY, value];
                        this.ranges.push(range);
                    }
                    break;
            }
        }
    }

    matchFeatureCore(feature, zoom) {
        let currentValue;
        if (this.replacedValueToIndex && feature.propertiesIndex) {
            currentValue = feature.propertiesIndex[this.key];
        }
        else {
            if (feature.properties !== undefined) {
                currentValue = feature.properties[this.key];
            }
            else {
                currentValue = feature.get(this.key)
            }
        }

        return this.isInRange(+currentValue);
    }

    replaceVaulesToPbfIndexCore(pbfLayer) {
        this.replacedValueToIndex = true;
    }

    isInRange(currentValue) {
        if (this.disallowedValues.includes(currentValue)) {
            return false;
        }
        if (this.allowedValues.includes(currentValue)) {
            return true;
        }

        for (let i = 0; i < this.ranges.length; i++) {
            let range = this.ranges[i];
            if (range.length === 1) {
                if (currentValue >= range[0]) {
                    return true;
                }
            }
            else {
                if (currentValue >= range[0] && currentValue <= range[1]) {
                    return true;
                }
            }
        }
    }

    static getRange(ranges, value) {
        for (let i = 0; i < ranges.length; i++) {
            let range = ranges[i];
            if (value >= range[0] && value <= range[1]) {
                return range;
            }
        }
        return null;
    }
}

GeoRangeFilter["getRange"] = function (ranges, value) {
    for (let i = 0; i < ranges.length; i++) {
        let range = ranges[i];
        if (value >= range[0] && value <= range[1]) {
            return range;
        }
    }
    return null;
}

export default GeoRangeFilter;