import { Box, type BoxProps } from "@mantine/core";
import type { FC } from "react";

export const Spacer: FC<BoxProps> = (props) => {
	return (
		<Box
			flex={1}
			{...props}
		/>
	);
};
