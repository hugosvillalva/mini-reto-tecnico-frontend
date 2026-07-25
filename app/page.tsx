export const dynamic = 'force-dynamic';

async function getProfile() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("No se pudo obtener el perfil");
    }
    
    return res.json();
  } catch (error) {
    console.error("Error fetching profile:", error);
    return null;
  }
}

export default async function Home() {
  const profile = await getProfile();

  if (!profile) {
    return (
      <main className="container">
        <div className="error-container">
          <h2>Oops! Algo salió mal</h2>
          <p>No pudimos conectar con el backend. Asegúrate de que NestJS esté corriendo.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-container">
            {/* Usamos img estándar en lugar de next/image para evitar requerir configuración de dominios externos */}
            <img 
              src={profile.avatar_url || "https://github.com/identicons/default.png"} 
              alt={`Avatar de ${profile.name || profile.login}`}
              className="avatar"
            />
          </div>
          <h1 className="name">{profile.name || "Sin nombre"}</h1>
          <p className="username">@{profile.login}</p>
        </div>

        {profile.bio && (
          <p className="bio">{profile.bio}</p>
        )}

        <div className="stats">
          <div className="stat-item">
            <span className="stat-value">{profile.public_repos || 0}</span>
            <span className="stat-label">Repos</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profile.followers || 0}</span>
            <span className="stat-label">Seguidores</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{profile.following || 0}</span>
            <span className="stat-label">Siguiendo</span>
          </div>
        </div>

        <a 
          href={`https://github.com/${profile.login}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="action-btn"
        >
          Ver en GitHub
        </a>
      </div>
    </main>
  );
}
