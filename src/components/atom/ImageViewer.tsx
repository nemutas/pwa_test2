import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from '../../css/atom.module.css';
import { selectFileState } from './FileSelectButton';

export const ImageViewer: React.FC = () => {
	const selectFile = useRecoilValue(selectFileState);

	return (
		<>
			{selectFile && (
				<img className={styles.ImageViewer} src={URL.createObjectURL(selectFile)} alt="" />
			)}
		</>
	);
};
