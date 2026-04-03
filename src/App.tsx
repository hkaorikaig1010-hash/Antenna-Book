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

  const Step = ({ num, text, sub, isAlert }: { num: string, text: string, sub?: string, isAlert?: boolean }) => (
    <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '30px', height: '30px', backgroundColor: isAlert ? '#f43f5e' : '#0ea5e9', color: 'white', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '14px' }}>{num}</div>
        <div style={{ width: '2px', flexGrow: 1, backgroundColor: '#e2e8f0', marginTop: '5px' }}></div>
      </div>
      <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', flexGrow: 1, border: isAlert ? '2px solid #fecaca' : 'none' }}>
        <p style={{ margin: 0, fontWeight: '900', color: isAlert ? '#dc2626' : '#1e293b', fontSize: '14px' }}>{text}</p>
        {sub && <p style={{ margin: '5px 0 0 0', fontSize: '12px', color: '#64748b', lineHeight: '1.4' }}>{sub}</p>}
      </div>
    </div>
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
            <p style={{ fontWeight: 'bold', color: '#444', fontSize: '14px' }}>まずは、自分の安全</p>
          </div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '18px', borderRadius: '15px', fontSize: '18px', fontWeight: 'bold', border: 'none' }}>本を開く 📖</button>
        </div>
      </Container>
    );
  }

  // --- 2. もくじ ---
  if (page === 'menu') {
    const menuItems = [
      { id: 'check', title: '1 今すぐチェック', p: '1' },
      { id: 'policy', title: '2 災害対応の考え方', p: '2' },
      { id: 'action', title: '3 災害発生時の対応', p: '3' },
      { id: 'flow_moving', title: '4 対応フロー<移動中等>', p: '4.5' },
      { id: 'flow_care', title: '5 対応フロー<在宅介護中>', p: '6.7' },
      { id: '6', title: '6 対応フロー<休日等>', p: '8.9' },
    ];
    return (
      <Container bg="#f8fafc">
        <h2 style={{ fontSize: '22px', fontWeight: '900', borderBottom: '4px solid #fbbf24', paddingBottom: '10px' }}>- もくじ -</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => setPage(item.id)} style={{ textAlign: 'left', padding: '15px', borderRadius: '12px', backgroundColor: 'white', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: 'bold', fontSize: '14px', color: '#334155' }}>{item.title}</span>
              <span style={{ color: '#94a3b8', fontSize: '11px' }}>P.{item.p}</span>
            </button>
          ))}
        </div>
      </Container>
    );
  }

  // --- 3. ① 今すぐチェック (地震・水害フルセット) ---
  if (page === 'check') {
    return (
      <Container bg="#f8fafc">
        <div style={{ backgroundColor: '#f43f5e', color: 'white', padding: '25px 20px', borderRadius: '0 0 30px 30px', margin: '-20px -20px 20px -20px' }}>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: '900' }}>① 今すぐチェック</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '40px' }}>
          <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#92400e', fontSize: '16px', borderBottom: '2px solid #fef3c7' }}>🚨 地震への備え</h3>
            <CheckItem id="eq1" text="寝室・居間に高い家具はないか" />
            <CheckItem id="eq2" text="水・コンロ・カイロ等の備蓄" />
            <CheckItem id="eq3" text="簡易トイレ(1日1人5~7回分)" />
            <CheckItem id="eq4" text="予備バッテリー・ランタン" />
          </div>
          <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#1e40af', fontSize: '16px', borderBottom: '2px solid #eff6ff' }}>🌊 水害への備え</h3>
            <CheckItem id="fl1" text="3m以上：レベル3・4で必ず避難" />
            <CheckItem id="fl2" text="30cm~3m：屋外避難(不可なら2階以上)" />
            <CheckItem id="fl3" text="30cm以下：自宅待機・断水に備える" />
          </div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #ddd', background: 'white' }}>⬅️ もくじに戻る</button>
        </div>
      </Container>
    );
  }

  // --- 4. ② 災害対応の考え方 ---
  if (page === 'policy') {
    const policies = [
      { num: '第1', text: '自らの命が最優先' },
      { num: '第2', text: 'クライアントや周囲の人命を守る' },
      { num: '第3', text: '事業所が現場をバックアップする' },
      { num: '第4', text: '職員一人ひとりが主体的に行動する' },
      { num: '第5', text: '業務の早期復旧と生活継続' },
      { num: '第6', text: '平常時の危機想定を活かす' },
    ];
    return (
      <Container bg="#f8fafc">
        <h2 style={{ borderBottom: '4px solid #fbbf24', paddingBottom: '10px' }}>② 災害対応の考え方</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px', paddingBottom: '40px' }}>
          {policies.map(p => (
            <div key={p.num} style={{ backgroundColor: 'white', padding: '15px', borderRadius: '15px', borderLeft: p.num === '第1' ? '8px solid #f43f5e' : '8px solid #cbd5e1' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>{p.num}</span>
              <p style={{ margin: '5px 0 0 0', fontWeight: 'bold', fontSize: '14px' }}>{p.text}</p>
            </div>
          ))}
          <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', borderRadius: '15px', border: '1px solid #ddd', background: 'white' }}>⬅️ もくじに戻る</button>
        </div>
      </Container>
    );
  }

  // --- 5. ③ 災害発生時の対応 ---
  if (page === 'action') {
    return (
      <Container bg="#f8fafc">
        <h2 style={{ color: '#f43f5e', borderBottom: '4px solid #f43f5e', paddingBottom: '10px' }}>③ 災害発生時の対応</h2>
        <div style={{ marginTop: '20px', paddingBottom: '40px' }}>
          <div style={{ backgroundColor: '#fef2f2', padding: '20px', borderRadius: '20px', border: '2px solid #fecaca', textAlign: 'center', marginBottom: '20px' }}>
            <p style={{ fontSize: '20px', fontWeight: '900', color: '#dc2626', margin: 0 }}>自らの命、最優先行動！</p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '20px' }}>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>◎ 安全が確保されない状況では、救助を呼ぶこと</p>
            <div style={{ height: '10px' }} />
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0 }}>◎ 周囲を観察し、信頼できる情報を得て安全な行動を</p>
          </div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', marginTop: '20px', borderRadius: '15px', border: '1px solid #ddd', background: 'white' }}>⬅️ もくじに戻る</button>
        </div>
      </Container>
    );
  }

  // --- 6. ④ 対応フロー (移動中等) ---
  if (page === 'flow_moving') {
    return (
      <Container bg="#f0f9ff">
        <h2 style={{ color: '#0ea5e9', borderBottom: '4px solid #0ea5e9', paddingBottom: '10px' }}>④ 対応フロー(移動中等)</h2>
        <div style={{ marginTop: '20px', paddingBottom: '40px' }}>
          <Step num="1" text="自分自身の安全の確保" sub="家族の安否確認も行う" />
          <Step num="2" text="情報収集・行動の決定" />
          <Step num="3" text="事業所に自分自身の安否連絡" />
          <Step num="4" text="CLTの支援チームとの連絡" />
          <Step num="5" text="CLT宅へ向かう" sub="連絡不能でも安全なら向かう" />
          <div style={{ backgroundColor: '#fee2e2', padding: '15px', borderRadius: '15px', fontSize: '12px', color: '#b91c1c' }}>📝 搬送時は必ずCLT宅に行き先メモを！</div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', marginTop: '20px', borderRadius: '15px', border: '1px solid #ddd', background: 'white' }}>⬅️ もくじに戻る</button>
        </div>
      </Container>
    );
  }

  // --- 7. ⑤ 対応フロー (在宅介護中) ---
  if (page === 'flow_care') {
    return (
      <Container bg="#fff1f2">
        <h2 style={{ color: '#f43f5e', borderBottom: '4px solid #f43f5e', paddingBottom: '10px' }}>⑤ 対応フロー(在宅介護中)</h2>
        <div style={{ marginTop: '20px', paddingBottom: '40px' }}>
          <Step num="1" text="自分自身の安全の確保" />
          <Step num="2" text="CLTの安全確保・救命・処置" isAlert={true} />
          <Step num="3" text="支援チーム・事業所へ連絡" />
          <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '20px', border: '2px dashed #f43f5e', margin: '20px 0', fontSize: '13px', color: '#e11d48' }}>
            📝 行き先メモを必ず残す(ご家族宛て)
          </div>
          <button onClick={() => setPage('menu')} style={{ width: '100%', padding: '15px', marginTop: '20px', borderRadius: '15px', border: '1px solid #ddd', background: 'white' }}>⬅️ もくじに戻る</button>
        </div>
      </Container>
    );
  }

  return null;
}

export default App;