import * as React from 'react';

const Notifications = props => (
	<svg width={32} height={32} viewBox="0 0 16 20" {...props}>
		<path
			fill="#FFF"
			d="M8 20c1.1 0 2-.9 2-2H6a2 2 0 0 0 2 2zm6-6V9c0-3.07-1.64-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.63 3.36 2 5.93 2 9v5l-2 2v1h16v-1l-2-2z"
		/>
	</svg>
);

export default Notifications;
