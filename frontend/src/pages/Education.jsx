export default function Education() {
  // 1. Define your static education data here
  const educationData = [
   {
    id: 1,
    institution: "Prof. Ramkrishna More Arts, Commerce & Science College, Akurdi",
    degree: "Bachelor of Computer Applications (BCA)",
    fieldOfStudy: "Computer Applications",
    startDate: "2023",
    endDate: "2026",
    description: "Completed a Bachelor of Computer Applications under Savitribai Phule Pune University (SPPU). Studied Data Structures, Java, DBMS, Operating Systems, Computer Networks, Software Engineering, and Web Development. Built full-stack MERN projects and strengthened problem-solving skills through Java programming."
    }
  ];

  return (
    <section>
      <div className="section-header">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">My academic background and qualifications.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {/* 2. Map over the static array instead of fetched data */}
        {educationData.map((edu) => (
          <div key={edu.id} className="card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827' }}>{edu.institution}</h3>
                <p style={{ fontSize: '1.125rem', color: '#2563eb', fontWeight: '600' }}>{edu.degree} in {edu.fieldOfStudy}</p>
              </div>
              <span style={{ backgroundColor: '#f3f4f6', padding: '0.5rem 1rem', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '600', color: '#4b5563' }}>
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            {edu.description && (
              <p style={{ marginTop: '1.5rem', color: '#4b5563', lineHeight: '1.6' }}>{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}