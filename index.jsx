import React from "react";
import { InputField } from "./InputField";
import "./style.css";

export const R = () => {
  return (
    <div className="r">
      <div className="frame">
        <img className="hintergrund" alt="Hintergrund" src="hintergrund-1.png" />
      </div>
      <div className="div-wrapper">
        <div className="text-wrapper">Herzlich Willkommen bei</div>
      </div>
      <div className="div">
        <div className="text-wrapper-2">deine Emailadresse</div>
      </div>
      <div className="input-field-wrapper">
        <InputField
          className="input-field-instance"
          keyFieldClassName="design-component-instance-node"
          property1="default-state"
          text="Email-Adresse"
        />
      </div>
    </div>
  );
};