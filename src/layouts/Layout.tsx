import React, { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="bg-blue-500 text-white p-4 text-xl">
				<nav>
					{/* Navigation Links or Branding */}
					<p>Your App Name</p>
				</nav>
			</header>
			<main className="flex-grow container mx-auto px-4 py-2">{children}</main>
			<footer className="bg-blue-500 text-white p-4 text-center">Footer Content Here</footer>
		</div>
	);
};

export default Layout;
