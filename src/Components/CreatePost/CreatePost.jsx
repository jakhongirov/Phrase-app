import React from 'react'
import './CreatePost.scss'
import Search from '../../Assets/Image/Search-icon.svg'
import Vector from '../../Assets/Image/create-post-vector.svg'

function CreatePost() {
	return (
		<>
			<div className='container'>
				<div className='createpost-heading'>
					<button className='createpost-heading__vector' type='button'>
						<img src={Vector} alt='Vector icon' />
					</button>
					<h1 className='createpost-heading__title'>Create post</h1>
				</div>
				<textarea
					className='createpost-textarea'
					placeholder='Write something...'
				/>
				<h2 className='createpost-small__title'>Select the hashtags </h2>
				<div>
					<button className='createpost-phrase' type='button'>
						#Phrase
					</button>
					<button className='createpost-phrase__name' type='button'>
						#Phrase name
					</button>
					<button className='createpost-search' type='button'>
						<img src={Search} alt='Search icon' />
					</button>
				</div>
				<select className='createpost-select' name='select'>
					<option className='createpost-selected' value='1' selected>
						Everyone can reply
					</option>
					<option className='createpost-select__option' value='2'>
						Only selected
					</option>
					<option className='createpost-select__option' value='3'>
						No one can reply
					</option>
				</select>
				<button className='createpost-btn'>Post</button>
			</div>
		</>
	)
}

export default CreatePost
