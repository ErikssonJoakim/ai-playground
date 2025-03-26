import React, { useState } from "react"

class CntrMgr {
  private val: any

  constructor(initVal: number) {
    this.val = initVal
  }

  inc(): void {
    this.val += 1
  }

  dec(): void {
    this.val -= 1
  }

  getVal(): number {
    return this.val
  }
}

const Cntr: React.FC = () => {
  const [cntrMgr] = useState(() => new CntrMgr(0))
  const [val, setVal] = useState(0)

  const inc = () => {
    cntrMgr.inc()
    setVal(cntrMgr.getVal())
  }

  const dec = () => {
    cntrMgr.dec()
    setVal(cntrMgr.getVal())
  }

  return (
    <div
      style={{
        background: "black",
        padding: "20px",
        borderRadius: "8px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2>Cntr: {val}</h2>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={dec}
          style={{
            background: "red",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <button
          onClick={inc}
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Cntr
