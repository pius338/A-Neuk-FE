import React from "react";
import { formatTime } from "../../utils/TimeFormatter";
import profileImg from "../../assets/images/logo.png";

interface ChatBubbleProps {
	content: string;
	sendTime: string;
	sender: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
	content,
	sendTime,
	sender,
}) => {
	const formattedTime = formatTime(sendTime);
	return (
		<div
			className={`flex flex-row ${
				sender === "MEMBER" ? "justify-end" : "justify-start ml-0.5"
			} items-end mb-4`}
		>
			{sender === "ASSISTANT" && (
				<img
					src={profileImg}
					alt="Profile"
					className="self-start w-12 mr-0.5 object-contain"
				></img>
			)}
			{sender === "MEMBER" && (
				<div className="text-xs text-gray-aneuk pr-1">
					{formattedTime}
				</div>
			)}
			<div className="flex flex-col">
				{sender === "ASSISTANT" && (
					<div className="ml-1.5 mb-1 mt-1.5 text-black-aneuk text-sm">
						아늑
					</div>
				)}
				<div
					className={`max-w-60 pt-2 pb-2.5 px-4 rounded-3xl break-words whitespace-pre-wrap box-border ${
						sender === "MEMBER"
							? "bg-white-aneuk text-gray-800"
							: "bg-black-aneuk text-white"
					}`}
				>
					{content}
				</div>
			</div>
			{sender === "ASSISTANT" && (
				<div className="text-xs text-gray-aneuk pl-1">
					{formattedTime}
				</div>
			)}
		</div>
	);
};

export default ChatBubble;
