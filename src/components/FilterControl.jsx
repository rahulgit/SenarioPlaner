const FilterControl = ({ filter, value, onChange }) => {
  switch (filter.type) {
    case "range":
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{filter.name}</label>
          <Slider
            value={value}
            onValueChange={(newValue) => onChange(filter.id, newValue)}
            min={filter.min}
            max={filter.max}
            step={filter.step}
          />
          <div className="text-sm text-gray-600">
            Selected Range: {value[0]} - {value[1]}
          </div>
        </div>
      );

    case "dropdown":
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{filter.name}</label>
          <Select
            onValueChange={(selectedOption) =>
              onChange(filter.id, selectedOption)
            }
            defaultValue={value}
          >
            <SelectTrigger>{value}</SelectTrigger>
            <SelectContent>
              {filter.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );

    case "date-range":
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{filter.name}</label>
          <DatePicker
            selectsRange
            startDate={new Date(value[0])}
            endDate={new Date(value[1])}
            onChange={(dates) => onChange(filter.id, dates)}
            className="border rounded-md p-2"
          />
        </div>
      );

    case "checkbox":
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{filter.name}</label>
          {filter.options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                checked={value.includes(option)}
                onCheckedChange={(checked) =>
                  onChange(
                    filter.id,
                    checked
                      ? [...value, option]
                      : value.filter((o) => o !== option)
                  )
                }
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      );

    case "radio":
      return (
        <div className="space-y-2">
          <label className="block text-sm font-medium">{filter.name}</label>
          <RadioGroup
            value={value}
            onValueChange={(selectedOption) =>
              onChange(filter.id, selectedOption)
            }
          >
            {filter.options.map((option) => (
              <Radio key={option} value={option} label={option} />
            ))}
          </RadioGroup>
        </div>
      );

    default:
      return null;
  }
};

export default FilterControl;
