import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "shadcn/ui/select";
import { Checkbox } from "shadcn/ui/checkbox";
import { RadioGroup, Radio } from "shadcn/ui/radio-group";
import { Switch } from "shadcn/ui/switch";
import DatePicker from "react-datepicker"; // For date-range picker
import "react-datepicker/dist/react-datepicker.css";

const filters = [
  {
    id: "1",
    name: "Transaction Amount",
    type: "range",
    min: 0,
    max: 100000,
    step: 100,
    selectedMin: 1000,
    selectedMax: 50000,
  },
  {
    id: "2",
    name: "Transaction Type",
    type: "dropdown",
    options: ["Credit", "Debit", "Refund", "Chargeback"],
    selectedOption: "Credit",
  },
  {
    id: "3",
    name: "Date Range",
    type: "date-range",
    startDate: "2025-01-01",
    endDate: "2025-01-31",
    selectedStartDate: "2025-01-10",
    selectedEndDate: "2025-01-25",
  },
  {
    id: "4",
    name: "Payment Method",
    type: "checkbox",
    options: ["Credit Card", "Debit Card", "Net Banking", "Wallet", "UPI"],
    selectedOptions: ["Credit Card", "UPI"],
  },
  {
    id: "5",
    name: "Transaction Status",
    type: "radio",
    options: ["Success", "Pending", "Failed"],
    selectedOption: "Success",
  },
];

export const Filters = () => {
  const [filterState, setFilterState] = useState(
    filters.reduce((acc, filter) => {
      acc[filter.id] = filter.selectedOption ||
        filter.selectedOptions || [filter.selectedMin, filter.selectedMax];
      return acc;
    }, {})
  );

  const handleChange = (id, value) => {
    setFilterState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  return (
    <div className="p-6 space-y-4">
      {filters.map((filter) => (
        <FilterControl
          key={filter.id}
          filter={filter}
          value={filterState[filter.id]}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};
