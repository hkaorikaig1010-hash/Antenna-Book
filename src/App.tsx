import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('cover');
  const [checks, setChecks] = useState<{ [key: string]: boolean }>({});

  const toggleCheck = (id: string) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const Container = ({ children, bg }: { children: React.ReactNode, bg: string }) => (
    <div style={{ backgroundColor: bg, minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px' }}>
      <div style={{ width: '100%', maxWidth: '400px', fontFamily: 'sans-serif' }}>
        {children}
      </div>
    </div>
  );

  const CheckItem = ({ id, text }: { id: string, text: string }) => (
    <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 0', cursor: 'pointer', borderBottom: '1px solid #f1f5f9' }}>
      <input type="checkbox" checked={!!checks[id]} onChange={() => toggleCheck(id)} style={{ width: '22px', height: '22px', accentColor: '#f43f5e' }} />
      <span style={{ fontSize: '14px', color: checks[id] ? '#cbd5e1' : '#475569', textDecoration: checks[id] ? 'line-through' : 'none' }}>{text}</span>
    </label>
  );

  // --- 1. 表紙 ---
  if (page === 'cover') {
    return (
      <Container bg="#fbbf24">
        <div style={{ backgroundColor: 'white', padding: '40px 20px', borderRadius: '40px', textAlign: 'center', marginTop: '40px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <p style={{ color: '#666', fontWeight: 'bold', fontSize: '14px' }}>アテンダント用</p>
          <h1 style={{ fontSize: '24px', fontWeight: '900', color: '#1a1a1a', margin: '10px 0' }}>緊急対応 アンテナBOOK</h1>
          <div style={{ fontSize: '80px', margin: '20px 0' }}>📢</div>
          <div style={{ backgroundColor: '#fef3c7', padding: '15px', borderRadius: '20px', marginBottom: '30px', border: '2px solid #fcd34d' }}>
            <p style={{ fontSize: '18px', fontWeight: '900', margin: '0 0 5px 0' }}>「落ちついて〜」</p>
            <p style={{ fontWeight: 'bold', color: '#444', fontSize: '14px' }}>まずは、自分の身の安全</p>
          </div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '18px', borderRadius: '15px', fontSize: '18px', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>本を開く 📖</button>
        </div>
      </Container>
    );
  }

  // --- 2. もくじ (全14項目) ---
  if (page === 'menu') {
    const menuItems = [
      { id: 'check', title: '1 今すぐチェック', p: '1' },
      { id: '2', title: '2 災害対応の考え方', p: '2' },
      { id: '3', title: '3 災害発生時の対応', p: '3' },
      { id: '4', title: '4 対応フロー<移動中等>', p: '4.5' },
      { id: '5', title: '5 対応フロー<在宅介護中>', p: '6.7' },
      { id: '6', title: '6 対応フロー<休日等>', p: '8.9' },
      { id: '7', title: '7 情報連絡体制', p: '10' },
      { id: '8', title: '8 安否確認で伝える事項', p: '11' },
      { id: '9', title: '9 緊急連絡先一覧', p: '12' },
      { id: '10', title: '10 職員の帰宅・参集基準', p: '13' },
      { id: '11', title: '11 帰宅完了の報告', p: '14' },
      { id: '12', title: '12 災害時準備品', p: '15' },
      { id: '13', title: '13 本人情報', p: '16' },
      { id: '14', title: '14 MEMO', p: '17' },
    ];

    return (
      <Container bg="#f8fafc">
        <div style={{ paddingTop: '20px', paddingBottom: '40px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '900', borderBottom: '4px solid #fbbf24', paddingBottom: '10px' }}>- もくじ -</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => item.id === 'check' ? setPage('check') : alert('このページは現在作成中です！')}
                style={{ textAlign: 'left', padding: '15px', borderRadius: '12px', backgroundColor: item.id === 'check' ? 'white' : '#f1f5f9', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', cursor: 'pointer', opacity: item.id === 'check' ? 1 : 0.7 }}
              >
                <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#334155' }}>{item.title}</span>
                <span style={{ color: '#94a3b8', fontSize: '11px' }}>P.{item.p}</span>
              </button>
            ))}
          </div>
          <button onClick={() => setPage('cover')} style={{ marginTop: '30px', border: 'none', background: 'none', color: '#94a3b8', fontWeight: 'bold', width: '100%' }}>🏠 表紙に戻る</button>
        </div>
      </Container>
    );
  }

  // --- 3. 今すぐチェック ---
  return (
    <Container bg="#f8fafc">
      <div style={{ backgroundColor: '#f43f5e', color: 'white', padding: '25px 20px', borderRadius: '0 0 30px 30px', margin: '-20px -20px 25px -20px' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '900' }}>① 今すぐチェック</h2>
        <p style={{ fontSize: '12px', marginTop: '5px', opacity: 0.9 }}>ハザードマップの確認等をしましょう</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#92400e', margin: '0 0 10px 0', fontSize: '16px' }}>🚨 地震災害への備え</h3>
          <CheckItem id="eq1" text="寝室・居間に高い家具は置いていないか" />
          <CheckItem id="eq2" text="最低限の備蓄(水・コンロ・カイロ)" />
          <CheckItem id="eq3" text="簡易トイレ(1日1人5~7回分)" />
          <CheckItem id="eq4" text="予備バッテリー・LEDランタン" />
        </div>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '25px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#1e40af', margin: '0 0 10px 0', fontSize: '16px' }}>🌊 水害への備え</h3>
          <CheckItem id="fl1" text="3m以上：警戒レベル3・4で必ず避難" />
          <CheckItem id="fl2" text="30cm~3m：屋外避難(無理なら2階以上)" />
          <CheckItem id="fl3" text="30cm以下：自宅待機・断水等に備える" />
        </div>
        <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #e2e8f0', background: 'white', fontWeight: 'bold', color: '#94a3b8' }}>⬅️ もくじに戻る</button>
      </div>
    </Container>
  );
}

export default App;