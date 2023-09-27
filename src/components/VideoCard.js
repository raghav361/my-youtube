const VideoCard = ({ info }) => {
	if (!info) return;
	const { snippet, statistics } = info;
	const { title, channelTitle, thumbnails } = snippet;

	return (
		<div className="p-4 m-2 w-72 h-full shadow-lg rounded-lg">
			<img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
			<ul>
				<li className="font-bold py-2">{title}</li>
				<li>{channelTitle}</li>
				<li>
					{new Intl.NumberFormat("en-IN").format(statistics.viewCount)} views
				</li>
			</ul>
		</div>
	);
};

export const AdVideoCard = ({ info }) => {
	return (
		<div className="p-1 m-1 border border-red-500">
			<VideoCard info={info} />
		</div>
	);
};

export default VideoCard;
