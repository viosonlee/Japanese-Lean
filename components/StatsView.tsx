import React from 'react';

export const StatsView: React.FC = () => {
  return (
    <div className="p-4 pb-24">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">学习进度</h2>
       
       <div className="grid grid-cols-2 gap-4 mb-6">
         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-primary mb-1">12</div>
            <div className="text-xs text-gray-500">已学单词</div>
         </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-warning mb-1">3</div>
            <div className="text-xs text-gray-500">连续打卡 (天)</div>
         </div>
       </div>

       <h3 className="font-bold text-gray-800 mb-4">学习活跃度</h3>
       <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-64 flex items-center justify-center text-gray-400 text-sm">
         [图表区域]
       </div>
    </div>
  );
};