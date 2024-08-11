import React from 'react';

interface PostInfoProps {
  version: string;
  avatar: string;
  username: string;
  children: any
}

export function PostInfoContainer({children}: {children: React.ReactNode}): any {
	return children
}

export function PostInfo ({ version, avatar, username }: PostInfoProps): any {
  return (
    <div className="flex items-center space-x-2 my-4">
      <span className="flex px-2 py-1 justify-center items-center rounded-md bg-[#E4E9F4]">
        <span className='text-[#374151] text-center font-sans text-sm font-normal leading-[150%] tracking-[0px]'>
          {version}
        </span>
      </span>
      <img
        src={avatar}
        alt={username}
        className="w-[20px] h-[20px] rounded-full border-[0.5px] border-[#14171F] bg-lightgray bg-cover bg-no-repeat bg-center"
      />
      <span className="text-[#111928] font-sans text-sm font-normal leading-[150%] tracking-[0px]">{username}</span>
    </div>
  );
};
