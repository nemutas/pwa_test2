import React from 'react';
import { atom, useSetRecoilState } from 'recoil';
import { Button } from '@material-ui/core';

export const selectFileState = atom<File | null>({
	key: 'selectFileState',
	default: null
});

export const FileSelectButton: React.FC = props => {
	const setSelectFile = useSetRecoilState(selectFileState);

	const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files![0];
		if (selectedFile) {
			setSelectFile(selectedFile);
			e.target.value = '';
		}
	};

	return (
		<Button variant="outlined" color="primary" component="label">
			{props.children}
			<input
				style={{ display: 'none' }}
				type="file"
				accept="image/png, image/jpeg"
				onChange={onChangeImageHandler}
			/>
		</Button>
	);
};
