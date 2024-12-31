import '@fortawesome/fontawesome-free/css/all.min.css';
const Header = () => {
    return (
        <header className="sticky top-0 bg-gray-100 bg-gradient-to-r from-gray-950 to-gray-50 text-white py-2 z-10">
            <div className="container mx-auto grid grid-cols-3 items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-red-100 ml-8">
                    <h1>Từ điển các</h1>
                </div>

                {/* Navigation */}
                <div className="flex justify-center space-x-5 text-gray-800">
                    <a className="btn bg-transparent hover:bg-gray-200 py-1 px-3 rounded">Hoàn thành</a>
                    <a className="btn bg-transparent hover:bg-gray-200 py-1 px-3 rounded">Miễn phí</a>
                    <a className="btn bg-transparent hover:bg-gray-200 py-1 px-3 rounded">Hot trong tuần</a>
                </div>

                {/* User Icon */}
                <div className="flex justify-end items-center space-x-3">
                    <i className="fas fa-user text-black text-xl"></i> {/* User Icon */}
                </div>
            </div>
        </header>
    );
};

export default Header;
