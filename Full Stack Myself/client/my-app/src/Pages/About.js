import React from "react";
import BarHomePage from './BarHomePage';
import DownPage from "./DownHomePage";
function About() {
    return (
        <div style={{ backgroundColor: '#f0f0f0' }}>
            <BarHomePage />
            <div style={styles.content}>
                <h2 style={styles.heading}>About Us</h2>
                <p style={styles.paragraph}>
                    Welcome to our creative space! We're passionate about bringing ideas to life and sharing our projects with the world.
                </p>
                <p style={styles.paragraph}>
                    Our mission is to inspire and empower others through our work. Whether it's designing, coding, or crafting, we pour our hearts into every project we undertake.
                </p>
                <p style={styles.paragraph}>
                    Take a journey through our portfolio and discover the stories behind each creation. We hope you find inspiration and joy in what we do.
                </p>
                <p style={styles.paragraph}>
                    Thank you for joining us on this creative adventure!
                </p><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <DownPage/>
        </div>
    );
}

const styles = {

    content: {
        maxWidth: '800px', // Limit the width of the content
        margin: '0 auto', // Center the content horizontally
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#FF7F00', // Dark gray text color
    },
    paragraph: {
        fontSize: '16px',
        lineHeight: '1.6',
        marginBottom: '20px',
        color: '#666', // Medium gray text color
    },
};

export default About;
