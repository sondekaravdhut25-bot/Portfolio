export default function Education() {
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

      <div className="timeline">
        {educationData.map((edu) => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-card">
              <div className="timeline-head">
                <div>
                  <h3 className="timeline-institution">{edu.institution}</h3>
                  <p className="timeline-degree">{edu.degree} · {edu.fieldOfStudy}</p>
                </div>
                <span className="timeline-dates">{edu.startDate} — {edu.endDate}</span>
              </div>
              {edu.description && (
                <p className="timeline-description">{edu.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
