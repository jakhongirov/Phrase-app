import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './StatisticsPage.scss';
import Diagramm from '../Diagramm/Diagramm';
import YearDiagramm from '../YearDiagramm/YearDiagramm';
import MonthDiagramm from '../MonthDiagramm/MonthDiagramm';

function StatisticsPage() {
	return (
		<>
			<div className='Statistics'>
				<div className='container'>
					<div className='Statistics-inner'>
						<h1 className='Statistics-heading'>Statistics</h1>

						<div className='users-page__hero'>
							<input
								className='users-page__hero-input'
								type='text'
								placeholder='Search'
							/>
						</div>

						<div className='pharse-name'>
							<NavLink to='/' className='pharse-name__btn'>
								#Phrase name{' '}
							</NavLink>
							<NavLink to='/#Phrase' className='pharse-name__btn phrase'>
								{' '}
								#Phrase{' '}
							</NavLink>
						</div>

						<div className='Weekly-inner'>
							<NavLink className='Weekly-inner__link' to='Weekly'>
								{' '}
								Weekly{' '}
							</NavLink>
							<NavLink className='Weekly-inner__link' to='Monthly'>
								{' '}
								Monthly{' '}
							</NavLink>
							<NavLink className='Weekly-inner__link' to='Yearly'>
								{' '}
								Yearly{' '}
							</NavLink>
						</div>

						<Routes>
							<Route path='/statistics' element={<Navigate to='/Weekly' />} />
							<Route path='/Weekly' element={<Diagramm />} />
							<Route path='/Monthly' element={<MonthDiagramm />} />
							<Route path='/Yearly' element={<YearDiagramm />} />
						</Routes>

						{/* <Diagramm /> */}

						<ul className='total-phrases'>
							<li className='total-phrases__item'>
								<p className='total-phrases__text'>
									{' '}
									Total phrases -{' '}
									<span className='total-phrases__span'> 458 </span>
								</p>
							</li>

							<li className='total-phrases__item'>
								<p className='total-phrases__text'>
									{' '}
									Added phrases -{' '}
									<span className='total-phrases__span'> 60 </span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default StatisticsPage;
