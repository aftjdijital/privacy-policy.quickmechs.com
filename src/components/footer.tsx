import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between ">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Quickmechs</h2>
            <p>
              Quickmechs, Inc. is not responsible for content on external Web
              sites.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>

            <div className="grid grid-cols-2 ">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="http://quickmechs.com/"
                    className="text-blue-600 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="http://quickmechs.com/home/about-us"
                    className="text-blue-600 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="http://quickmechs.com/home/become-a-member"
                    className="text-blue-600 hover:underline"
                  >
                    Become a member
                  </Link>
                </li>
                <li>
                  <Link
                    to="quickmechs.com/home/services"
                    className="text-blue-600 hover:underline"
                  >
                    Services
                  </Link>
                </li>
              </ul>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="quickmechs.com/home/spare-parts"
                    className="text-blue-600 hover:underline"
                  >
                    Spare Part
                  </Link>
                </li>
                <li>
                  <Link
                    to="quickmechs.com/home/support"
                    className="text-blue-600 hover:underline"
                  >
                    support
                  </Link>
                </li>
                <li>
                  <Link
                    to="quickmechs.com/home/site-map"
                    className="text-blue-600 hover:underline"
                  >
                    Site map
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-600 hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Quickmechs, Inc, a Quickmechs
            Group Company. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
