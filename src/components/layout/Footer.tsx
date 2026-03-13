export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">About Us</h3>
          <p>We are an awesome company doing awesome things.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact Us</h3>
          <p>123 Awesome Street</p>
          <p>Awesome City, AC 12345</p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p>&copy; 2024 My Awesome Site. All rights reserved.</p>
      </div>
    </footer>
  );
}
