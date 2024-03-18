import React from "react";
import "../Assets/scss/util.scss";

interface Props {
  children: React.ReactElement;
  label: string;
  value: string;
  normalStyle?: React.CSSProperties;
  floatStyle?: React.CSSProperties;
  onChange?: () => void; // Auto assigned by Form.Item, can override
}

const FloatLabel = ({
  children,
  label,
  value,
  normalStyle,
  floatStyle,
  onChange,
}: Props) => {
  const [focus, setFocus] = React.useState(false);

  const isFloat = focus || (value && value.length !== 0);

  const labelClass = isFloat ? "label-content label-float" : "label-content";

  const labelStyle = isFloat ? floatStyle : normalStyle;

  const inputElement = React.cloneElement(children, { onChange });

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {inputElement}

      <label className={labelClass} style={labelStyle}>
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
