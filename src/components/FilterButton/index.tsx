"use client";

import classNames from "classnames";
import "./style.scss";
import { nunito } from "@/fonts/configure";

interface FilterButtonProperty {
  name: string;
  isActive?: boolean;
  handleClick?: () => void;
}

const FilterButton: React.FC<FilterButtonProperty> = ({
  name,
  isActive = false,
  handleClick = () => {},
}) => {
  return (
    <button
      className={classNames("filter-button", nunito.className, { isActive })}
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default FilterButton;
