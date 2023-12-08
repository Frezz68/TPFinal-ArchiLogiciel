import { describe, it, expect, vi, beforeEach } from 'vitest';

// Simuler les dépendances
const mockLogin = vi.fn();
const mockRouter = {
  push: vi.fn()
};
const mockUserStore = {
  token: '',
  role: ''
};

// Simuler les inputs
const email = { value: 'test@example.com' };
const password = { value: 'password123' };

// Définition de la fonction ici pour l'exemple
async function loginClick(event : Event) {
  event.preventDefault();

  const response = await mockLogin(email.value, password.value);
  if (response.status === 200) {
  const data = await response.json();

  mockUserStore.token = data.token;
  mockUserStore.role = data.role;

  mockRouter.push({ name: 'accueil' });
  }else{
    console.log('Erreur de connexion');
  }
}


describe('loginClick', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    vi.clearAllMocks();
    mockUserStore.token = '';
    mockUserStore.role = '';
  });
  it('should handle successful login', async () => {
    // Configurer le mock pour simuler une réponse réussie
    mockLogin.mockResolvedValue({ status: 200, json: async () => ({ token: 'abc123', role: 'user' }) });

    // Créer un faux événement
    const event = new Event('click');
    const preventDefault = vi.fn();
    event.preventDefault = preventDefault;

    // Appeler la fonction
    await loginClick(event);

    // Vérifier que preventDefault a été appelé
    expect(preventDefault).toHaveBeenCalled();

    // Vérifier que les valeurs sont correctement assignées
    expect(mockUserStore.token).toBe('abc123');
    expect(mockUserStore.role).toBe('user');

    // Vérifier que le router a été utilisé
    expect(mockRouter.push).toHaveBeenCalledWith({ name: 'accueil' });
  });

  it('should handle login error', async () => {
    // Configurer le mock pour simuler une réponse d'erreur
    mockLogin.mockResolvedValue({
      status: 401,
      json: async () => ({ message: "Erreur de connexion" })
    });

    // Créer un faux événement
    const event = new Event('click');
    const preventDefault = vi.fn();
    event.preventDefault = preventDefault;

    // Appeler la fonction
    await loginClick(event);

    // Vérifier que preventDefault a été appelé
    expect(preventDefault).toHaveBeenCalled();

    // Vérifier le comportement en cas d'erreur (par exemple, pas de changement dans userStore et pas de redirection)
    expect(mockUserStore.token).toBe("");
    expect(mockUserStore.role).toBe("");
    expect(mockRouter.push).not.toHaveBeenCalledWith({ name: 'accueil' });
  });
});
