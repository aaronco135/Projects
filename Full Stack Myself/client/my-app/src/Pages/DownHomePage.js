import React from "react";

function DownPage() {
    return (
        <div style={{ backgroundColor: "#000033", padding: "40px 0" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                <h2 className="StyWritten">Subscribe to our Newsletter</h2>
                <p  className="StyWritten">Get the latest updates delivered straight to your inbox.</p>
                <form style={{ marginTop: "20px" }}>
                    <input type="email" placeholder="Enter your email address" style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    <button type="submit" style={{ marginLeft: "10px", padding: "10px 20px", backgroundColor: "#ff6600", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Subscribe</button>
                </form>
            </div>
            <div style={{ maxWidth: "1200px", margin: "20px auto 0", textAlign: "center" }}>
                <p  className="StyWritten">Feel free to contact us anytime for more information.</p>
                <div>
                    <a href="/contact" style={{ color: "#333", textDecoration: "underline", marginRight: "10px" }}>Contact Us</a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: "10px" }}>
                        <img src="data:image/jpeg;base64,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" alt="Facebook" style={{ width: "30px", height: "30px", verticalAlign: "middle", borderRadius : '5px'}} />
                    </a>
                    <a href="https://t.me/your_telegram_channel" target="_blank" rel="noopener noreferrer">
                        <img src="data:image/jpeg;base64,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" alt="Telegram" style={{ width: "30px", height: "30px", verticalAlign: "middle", borderRadius : "5px"}} />
                    </a>
                </div>
            </div>
            <style>
                {`
                    .StyWritten {
                        font-family: 'Times New Roman';
                        color : white
                    }
                    `}
            </style>
        </div>
    );
}


export default DownPage;