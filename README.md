# Pomodoro Timer (React + Electron + TypeScript)

Objetivo: Desenvolver um aplicativo de timer Pomodoro para desktop.

---

## Requisitos Funcionais
### RF-01: Ciclo Pomodoro Padrão
O aplicativo deve operar com três estados de timer:
- Foco (Pomodoro): 25 minutos.
- Pausa Curta: 5 minutos.
- Pausa Longa: 15 minutos.

### RF-02: Lógica de Ciclo Automático
O aplicativo deve seguir a lógica Pomodoro padrão
- Após 1 ciclo de "Foco", iniciar 1 "Pausa Curta".
- Após 4 ciclos de "Foco", iniciar 1 "Pausa Longa".
O aplicativo deve alternar automaticamente para o próximo ciclo após o término do atual.

### RF-03: Controles do Timer
O usuário deve ter controles claros para:
- Iniciar: Iniciar o ciclo atual.
- Pausar/Retomar: Pausar o timer no tempo corrente e retomá-lo.
- Resetar/Pular: Resetar o timer do ciclo atual ou pular para o próximo ciclo (ex: pular uma pausa).

### RF-04: Notificações
O aplicativo deve notificar o usuário quando um ciclo terminar.
- Notificação de Desktop (Electron): Enviar uma notificação nativa do sistema operacional (ex: "Hora da pausa!" ou "Hora de focar!").
- Alerta Sonoro: Emitir um som de notificação (o som deve ser sutil e moderno).

### RF-05: Configurações do Usuário
Deve haver uma área de configurações simples onde o usuário possa:
- Ajustar a duração (em minutos) dos timers de Foco, Pausa Curta e Pausa Longa.
- Ativar/Desativar os alertas sonoros.
- Ativar/Desativar as notificações de desktop.
- Configurar o número de ciclos de "Foco" antes de uma "Pausa Longa".

### RF-06: Indicador de Ciclo
- A interface deve mostrar visualmente quantos ciclos de "Foco" foram concluídos na sessão atual.

### RF-07: Persistência de Configurações
As configurações definidas pelo usuário devem ser salvas localmente e carregadas quando o aplicativo for reiniciado.

## Requisitos Não Funcionais
### RNF-01: Design e UI:
A interface deve ser minimalista. O design deve ser o foco principal: limpo, minimalista, moderno, com boa tipografia e espaçamento.

### RNF-02: Visualização do Timer
O timer (MM:SS) deve ser o elemento central e mais visível da tela.

### RNF-03: Tecnologia
A aplicação deve ser desenvolvida usando Electron como wrapper de desktop e React para a renderização da interface.

### RNF-04: Integração com SO (Electron)
- Ícone na Bandeja (System Tray): O aplicativo deve ter um ícone na bandeja do sistema.
- Minimizar para Bandeja: Fechar a janela principal deve minimizar o aplicativo para a bandeja, não fechá-lo (o timer continua rodando).
- Menu de Contexto: Clicar com o botão direito no ícone da bandeja deve exibir um menu simples (ex: "Mostrar App", "Pausar Timer", "Sair").

### RNF-05: Performance
A aplicação deve ser leve e ter baixo consumo de CPU e memória, especialmente quando minimizada ou rodando em segundo plano.

### RNF-06: Janela da Aplicação
- A janela pode ter um tamanho fixo (não redimensionável) para manter a integridade do design.
- O aplicativo deve remover o "Menu" padrão do Electron (File, Edit, View...).
- Adicionar uma opção "Sempre no Topo" (Always-on-Top).

### RNF-07: Plataforma
O aplicativo deve ser compilável para Windows, macOS e Linux.