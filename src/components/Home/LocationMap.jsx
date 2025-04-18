export default function LocationMap() {
    return (
      <div className="w-full h-[50vh]  mb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.556258187738!2d-114.04003501438629!3d51.932316112744125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53741567ec90318f%3A0x23e2b9c9dd47ad63!2s2002%2020%20St%20%235%2C%20Bowden%2C%20AB%20T0M%200A1%2C%20Canada!5e0!3m2!1sen!2sin!4v1744093087415!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
  