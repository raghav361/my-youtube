const commentsData = [
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [
			{
				name: "Akshay Saini",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				replies: [],
			},
			{
				name: "Akshay Saini",
				text: "Lorem ipsum dolor sit amet, consectetur adip",
				replies: [
					{
						name: "Akshay Saini",
						text: "Lorem ipsum dolor sit amet, consectetur adip",
						replies: [
							{
								name: "Akshay Saini",
								text: "Lorem ipsum dolor sit amet, consectetur adip",
								replies: [
									{
										name: "Akshay Saini",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [
											{
												name: "Akshay Saini",
												text: "Lorem ipsum dolor sit amet, consectetur adip",
												replies: [],
											},
										],
									},
									{
										name: "Akshay Saini",
										text: "Lorem ipsum dolor sit amet, consectetur adip",
										replies: [],
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
	{
		name: "Akshay Saini",
		text: "Lorem ipsum dolor sit amet, consectetur adip",
		replies: [],
	},
];

const Comment = ({ data }) => {
	const { name, text, replies } = data;

	return (
		<div className="flex my-2 shadow-md bg-gray-100 p-2 rounded-lg">
			<img
				className="w-12 h-12"
				alt="user-icon"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnpYj8EpsmZKmZNYfRVvQxQN01Eh1Xj5woA&usqp=CAU"
			/>
			<div className="px-3">
				<p className="font-bold">{name}</p>
				<p>{text}</p>
			</div>
		</div>
	);
};

const CommentsList = ({ comments }) => {
	// NOTE: Don't use indexes as keys
	return comments.map((comment, index) => (
		<div key={index}>
			<Comment data={comment} />
			<div className="pl-5 border border-l-black ml-5">
				<CommentsList comments={comment.replies} />
			</div>
		</div>
	));
};

const CommentsContainer = () => {
	return (
		<div className="m-3 p-2">
			<h1 className="font-bold text-2xl">Comments</h1>
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsContainer;
