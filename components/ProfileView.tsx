import React from 'react';
import { IconChevronDown } from './ui/Icons';
import { downloadAudioConfig } from '../utils/audioGenerator';

export const ProfileView: React.FC = () => {
  return (
    <div className="pb-24">
       <div className="bg-white p-6 border-b border-gray-100 mb-4">
         <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl">👤</div>
            <div>
                <h2 className="text-xl font-bold text-gray-800">访客用户</h2>
                <p className="text-sm text-gray-500">N5 初学者</p>
            </div>
         </div>
       </div>

       <div className="space-y-1">
         <div 
            onClick={downloadAudioConfig}
            className="bg-white p-4 flex justify-between items-center active:bg-gray-50 cursor-pointer border-b border-gray-50"
         >
            <div>
                <span className="text-sm text-primary font-bold">导出音频生成配置</span>
                <p className="text-xs text-gray-400 mt-1">下载 JSON 文件以配合 Python 脚本生成高质量 MP3</p>
            </div>
            <IconChevronDown className="w-4 h-4 text-gray-300 -rotate-90" />
         </div>

         {['通用设置', '重置进度', '关于应用', '帮助与反馈'].map((item, idx) => (
             <div key={idx} className="bg-white p-4 flex justify-between items-center active:bg-gray-50 cursor-pointer border-b border-gray-50">
                <span className={`text-sm ${item === '重置进度' ? 'text-danger' : 'text-gray-700'}`}>{item}</span>
                <IconChevronDown className="w-4 h-4 text-gray-300 -rotate-90" />
             </div>
         ))}
       </div>
    </div>
  );
};