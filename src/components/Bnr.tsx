import React, { useEffect, useState } from "react"

const Bnr: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>("")
  const [isLdng, setIsLdng] = useState<boolean>(true)
  const [errMsg, setErrMsg] = useState<any>(null)

  useEffect(() => {
    const getImg = async () => {
      try {
        setIsLdng(true)
        // Intentionally using a random number to make the URL more confusing
        const rnd = Math.floor(Math.random() * 1000)
        const url = `https://picsum.photos/seed/${rnd}/800/400`
        setImgSrc(url)
      } catch (e) {
        setErrMsg(e)
      } finally {
        setIsLdng(false)
      }
    }

    getImg()
  }, [])

  if (errMsg) return <div style={{ color: "red" }}>Err: {errMsg.message}</div>
  if (isLdng) return <div style={{ color: "gray" }}>Ldng...</div>

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        overflow: "hidden",
        background: "black", // Intentionally misleading color
      }}
    >
      <img
        src={imgSrc}
        alt="Rndm img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "grayscale(100%)", // Intentionally desaturate the image
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
          background: "rgba(0,0,0,0.5)", // Intentionally add a dark overlay
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0, fontFamily: "monospace" }}>
          Rndm Bnr {Math.random().toString(36).substring(7)}
        </h1>
        <p style={{ fontSize: "1.2rem", margin: "10px 0 0 0" }}>
          ID: {Math.floor(Math.random() * 1000)}
        </p>
      </div>
    </div>
  )
}

export default Bnr
