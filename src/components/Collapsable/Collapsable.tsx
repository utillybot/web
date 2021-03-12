import useCollapsed from './useCollapsed';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { mc } from '../../helpers';
import { useRef } from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	collapsable: ({ maxHeight }) => ({
		overflow: 'hidden',
		transition: 'max-height 0.3s ease-in',
		maxHeight,
	}),

	collapsed: {
		maxHeight: 0,
		transition: 'max-height 0.3s ease-out',
	},
});

export default function Collapsable(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
): JSX.Element {
	const { collapsed } = useCollapsed();
	const containerRef = useRef<HTMLDivElement>(null);
	const styles = useStyles({
		maxHeight: !collapsed ? containerRef.current?.scrollHeight : undefined,
	});

	return (
		<div
			{...props}
			ref={containerRef}
			className={mc(props.className, {
				[styles.collapsed]: collapsed,
				[styles.collapsable]: true,
			})}
		/>
	);
}
