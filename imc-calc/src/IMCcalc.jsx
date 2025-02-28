import React, { useState } from "react";
import "./App.css";

function IMCcalc() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState("");
  const [categoria, setCategoria] = useState("");

  // FORMULA IMC = peso (kg) / altura (m)².

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imc = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(imc);

      if (imc < 18.5) {
        setCategoria("Abaixo do peso");
      } else if (imc >= 18.5 && imc <= 24.9) {
        setCategoria("Peso normal");
      } else if (imc >= 25 && imc <= 29.9) {
        setCategoria("Sobrepeso");
      }
    }
  };

  return (
    <div className="imc-container">
      <h1>Calculadora de IMC</h1>
      <div className="imc-input">
        <label>Altura em (cm)</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Sua altura (cm)"
        />
      </div>
      <div className="imc-input">
        <label>Peso em (kg)</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Seu peso (kg)"
        />
      </div>
      <button className="imc-btn" onClick={calcularIMC}>
        Calcular
      </button>
      {imc && (
        <div className="result">
          <h2>Seu IMC é: {imc}</h2>
          <h2>Categoria: {categoria}</h2>
        </div>
      )}
    </div>
  );
}

export default IMCcalc;
