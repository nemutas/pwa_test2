import './App.css';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { FileSelectButton } from './components/atom/FileSelectButton';
import { ImageViewer } from './components/atom/ImageViewer';

export const App: React.FC = () => {
	return (
		<RecoilRoot>
			<div>
				<FileSelectButton>File Select</FileSelectButton>
				<ImageViewer />
			</div>
		</RecoilRoot>
	);
};
