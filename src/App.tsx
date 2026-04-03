import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, BookOpen, AlertCircle, Clock, Search } from 'lucide-react';

const Handbook = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'すべて', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'urgent', name: '至急', icon: <AlertCircle className="w-4 h-4" /> },
    { id: 'daily', name: '日常', icon: <Clock className="w-4 h-4" /> },
  ];

  const items = [
    {
      id: 1,
      title: "朝の開館準備",
      category: "urgent",
      time: "08:30 - 09:00",
      tasks: ["メインゲートの解錠", "照明・空調の点検", "レジ金の確認"],
      status: "important"
    },
    {
      id: 2,
      title: "清掃ルーティン",
      category: "daily",
      time: "10:00 - 11:00",
      tasks: ["フロアのモップ掛け", "ゴミ箱の回収", "備品の補充"],
      status: "normal"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50 font-sans text-slate-900">
      <header className="bg-yellow-400 p-6 shadow-md border-b-4 border-yellow-500">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-black flex items-center gap-2 italic tracking-wider">
            <BookOpen className="w-8 h-8" />
            今すぐチェックしておこう
          </h1>
          <p className="mt-1 text-sm font-bold text-yellow-900 opacity-80">
            今日のミッションを確認して、最高の1日にしよう！
          </p>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 pb-20">
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="何かお探しですか？" 
            className="w-full p-4 pl-12 rounded-2xl bg-white border-2 border-yellow-200 shadow-sm focus:outline-none focus:border-yellow-400 transition-all font-medium"
          />
          <Search className="absolute left-4 top-4 text-yellow-400 w-6 h-6" />
        </div>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all shadow-sm ${
                activeTab === cat.id 
                  ? 'bg-slate-900 text-yellow-400 scale-105' 
                  : 'bg-white text-slate-600 hover:bg-yellow-100 border-2 border-yellow-100'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id} className="group relative bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all border-2 border-yellow-100 overflow-hidden active:scale-95">
              <div className={`absolute top-0 left-0 w-2 h-full ${item.category === 'urgent' ? 'bg-red-400' : 'bg-blue-400'}`} />
              
              <div className="flex justify-between items-start mb-4 pl-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter ${
                      item.category === 'urgent' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-slate-800">{item.title}</h3>
                </div>
                <ChevronRight className="text-yellow-400 group-hover:translate-x-1 transition-transform" />
              </div>

              <div className="space-y-2 pl-2">
                {item.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-600 group/item">
                    <div className="w-5 h-5 rounded-md border-2 border-yellow-200 flex items-center justify-center group-hover/item:bg-yellow-400 transition-colors">
                      <CheckCircle2 className="w-3 h-3 text-transparent group-hover/item:text-white" />
                    </div>
                    {task}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <button className="fixed bottom-6 right-6 w-16 h-16 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center text-yellow-400 active:scale-90 transition-transform border-4 border-yellow-400">
        <span className="text-3xl font-bold">+</span>
      </button>
    </div>
  );
};

export default Handbook;