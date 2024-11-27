import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconProvider } from "../../utils/IconProvider";
import { useEmotionSelectPage } from "./EmotionSelectPageContext";
import CheckboxGroup from "./CheckBoxGroup";

const EmotionSelectPage = () => {
	const navigate = useNavigate();
	const { emotionData } = useEmotionSelectPage();
	const [curIndex, setCurIndex] = useState(0);
	const [selectedEmotions, setSelectedEmotions] = useState<string[]>([]);

	const contentList = emotionData.data.content_list;

	const handleNext = () => {
		if (curIndex < contentList.length - 1) {
			setCurIndex((prevIndex) => prevIndex + 1);
			console.log(selectedEmotions);
			setSelectedEmotions([]);
		}
	};

	const handlePrevious = () => {
		if (curIndex > 0) {
			setCurIndex((prevIndex) => prevIndex - 1);
			setSelectedEmotions([]);
		}
	};

	return (
		<div className="absolute inset-0 bg-white-aneuk flex flex-col overflow-hidden">
			<div className="w-full min-h-14 h-14 bg-transparent flex justify-center items-center px-4">
				<button
					onClick={() => {
						navigate(-1);
					}}
					className="absolute left-4"
				>
					<IconProvider.LeftArrowIcon className="w-8 h-8" />
				</button>
			</div>
			<div className="w-full flex-1 flex-col pt-[10%] justify-center items-center">
				<div className="w-full flex flex-col items-center pb-36">
					<div className="font-pretendard font-bold text-xl text-[#6F6F6F] mb-8">
						느꼈던 감정에 가까운 단어가 있나요?
					</div>
					<div className="flex flex-col w-[80%] aspect-[2/2.8] p-5 bg-white rounded-[32px] shadow-custom-strong overflow-hidden">
						<div className="mb-5 font-gowun-bold text-lg text-black-aneuk text-opacity-80">
							# {curIndex + 1} / {contentList.length}
						</div>
						<div className="min-h-[20%] max-h-[40%] mb-6 px-3 overflow-y-auto">
							<div className="font-gowun-regular text-black-aneuk text-opacity-80 text-">
								{contentList[curIndex].original_content}
							</div>
						</div>
						<div className="ml-5 mb-2 font-gowun-regular text-[#6F6F6F] text-xs">
							추천 단어
						</div>
						<div className="flex-1 px-5 overflow-y-auto">
							<CheckboxGroup
								options={contentList[
									curIndex
								].recommend_emotion.map((emotion) => ({
									id: emotion.id,
									label: emotion.title,
								}))}
								selectedOptions={selectedEmotions}
								onChange={setSelectedEmotions}
							/>
						</div>

						<div className="flex justify-between mt-4">
							<button
								onClick={handlePrevious}
								disabled={curIndex === 0}
								className="pr-2 pl-2.5 py-2.5 text-black-aneuk border-[1px] rounded-full disabled:opacity-50"
							>
								<IconProvider.LeftArrowIcon className="mr-0.5" />
							</button>
							<button
								onClick={handleNext}
								disabled={curIndex === contentList.length - 1}
								className="pl-2 pr-2.5 py-2.5 text-black-aneuk border-[1px] rounded-full disabled:opacity-50"
							>
								<IconProvider.RightArrowIcon className="ml-0.5" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmotionSelectPage;
