import fetch from "node-fetch";

export const sendSMS = async (message, phone) => {
  try {
    const payload = {
      message,
      tpoa: "Sender",
      recipient: [{ msisdn: `57${phone}` }],
    };

    const response = await fetch("https://api.labsmobile.com/json/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "Basic " +
          Buffer.from(
            `${process.env.LABSMOBILE_USER}:${process.env.LABSMOBILE_TOKEN}`
          ).toString("base64"),
      },
      body: JSON.stringify(payload),
    });


    return true; // ✅ envío exitoso
  } catch (error) {
    console.error("Error en el servicio de SMS:", error.message);
    return false; // ❌ error de conexión o interno
  }
};
