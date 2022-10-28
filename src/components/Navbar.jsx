import React from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = React.useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
				<div>
						<img src={Logo} alt="Logo Image" className='mt-5' style={{width: '200px'}} />
				</div>

			{/* Menu */}
				<nav>
						<ul className='hidden md:flex'>
								<li>
										<Link to='home' smooth={true} duration={500}>
												Home
										</Link>
								</li>
								<li>
										<Link to='about' smooth={true} duration={500}>
												About
										</Link></li>
								<li>
										<Link to='skills' smooth={true} duration={500}>
													Skills
											</Link>
								</li>
								<li>
										<Link to='work' smooth={true} duration={500}>
												Work
										</Link>
								</li>
								<li>
										<Link to='contact' smooth={true} duration={500}>
												Contact
										</Link>
								</li>
						</ul>
				</nav>

				{/* Hamburger */}
				<div onClick={ handleClick } className='md:hidden z-10'>
						{ !nav ? <FaBars /> : <FaTimes /> }
				</div>

				{/* Mobile menu */}
				<ul className={ !nav ? ('hidden')
														 : ('absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center') }>
						<li className="py-6 text-4xl">
								<Link to='home' smooth={true} duration={500} onClick={ handleClick }>
										Home
								</Link>
						</li>
						<li className="py-6 text-4xl">
								<Link to='about' smooth={true} duration={500} onClick={ handleClick }>
										About
								</Link>
						</li>
						<li className="py-6 text-4xl">
								<Link to='skills' smooth={true} duration={500} onClick={ handleClick }>
										Skills
								</Link>
						</li>
						<li className="py-6 text-4xl">
								<Link to='work' smooth={true} duration={500} onClick={ handleClick }>
										Work
								</Link>
						</li>
						<li className="py-6 text-4xl">
								<Link to='contact' smooth={true} duration={500} onClick={ handleClick }>
										Contact
								</Link>
						</li>
				</ul>

			{/* Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
					<ul>
							<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
									<a 
											className='flex justify-between items-center w-full text-grey-300' 
											href="#">
											LinkedIn <FaLinkedin size={30} />
									</a>
							</li>
							<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
									<a 
											className='flex justify-between items-center w-full text-grey-300' 
											href="#">
											GitHub <FaGithub size={30} />
									</a>
							</li>
							<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
									<a 
											className='flex justify-between items-center w-full text-grey-300' 
											href="#">
											Email <HiOutlineMail size={30} />
									</a>
							</li>
							<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
									<a 
											className='flex justify-between items-center w-full text-grey-300' 
											href="#">
											Resume <BsFillPersonLinesFill size={30} />
									</a>
							</li>
					</ul>
			</div>
		</div>
	)
}

export default Navbar;