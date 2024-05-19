import React from "react";
import DownPage from "./DownHomePage";
import BarHomePage from "./BarHomePage";

function Contact() {
    return (
        <div>
            <BarHomePage />
            <div style={{ textAlign: "center", padding: "50px 0" }}>
                <h2>Contact Us</h2>
                <p>Have questions or feedback? We'd love to hear from you!</p>
                <form style={{ maxWidth: "600px", margin: "0 auto" }}>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="name">Your Name:</label><br />
                        <input type="text" id="name" name="name" style={{ padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="email">Your Email:</label><br />
                        <input type="email" id="email" name="email" style={{ padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "20px" }}>
                        <label htmlFor="message">Message:</label><br />
                        <textarea id="message" name="message" rows="5" style={{ padding: "10px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }}></textarea>
                    </div>
                    <button type="submit" style={{ backgroundColor: "#ff6600", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer" }}>Send Message</button>
                </form>
            </div>
            <DownPage />
        </div>
    );
}

export default Contact;
