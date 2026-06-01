const vscode = require('vscode');

let myStatusBarItem;
let likeCount = 0;
let isLiked = false;

function activate(context) {
    // 1. Rejestracja komendy, która odpala się po kliknięciu
    const commandId = 'heart-liker.toggleLike';
    
    let disposable = vscode.commands.registerCommand(commandId, () => {
        // Logika polubienia / odlubienia
        if (!isLiked) {
            likeCount++;
            isLiked = true;
            vscode.window.showInformationMessage('Polubiłeś to! ❤️');
        } else {
            likeCount--;
            isLiked = false;
            vscode.window.showInformationMessage('Cofnąłeś polubienie. 💔');
        }
        
        // Aktualizacja wyglądu paska
        updateStatusBarItem();
    });

    context.subscriptions.push(disposable);

    // 2. Tworzenie elementu w Status Bar (na dole ekranu)
    myStatusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    myStatusBarItem.command = commandId;
    context.subscriptions.push(myStatusBarItem);

    // Inicjalizacja wyglądu
    updateStatusBarItem();
}

function updateStatusBarItem() {
    // Zmiana ikony w zależności od stanu (pełne serce vs puste serce)
    const icon = isLiked ? '$(heart-filled)' : '$(heart)';
    
    // Ustawienie tekstu: ikona + nasz licznik
    myStatusBarItem.text = `${icon} ${likeCount}`;
    myStatusBarItem.tooltip = isLiked ? 'Kliknij, aby odlubić' : 'Kliknij, aby polubić';
    myStatusBarItem.show();
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}