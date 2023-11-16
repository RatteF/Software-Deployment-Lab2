# Software-Deployment-Lab2

Ich hatte große Probleme mit der Aufgabe, sodass ich diese nicht erfolgreich erledigen konnte. Im folgenden möchte ich zumindest meine Probleme aufzeigen. Meine Dateien liegen in diesem Git-Ordner vor.

Nachdem ich alle Dateien soweit fertig hatte, DevOps mit Github verbunden hatte und die Build Pipeline aufgesetzt habe, bin ich immer wieder auf verschiedene Error-Meldungen bezüglich der Pipeline gestoßen.
Zunächst gab es ein leicht zu lösendes Problem bezüglich ```No hosted parallelism```. Das war aber schnell gelöst.

Anschließend ist mir aufgefallen, dass die Pipeline bei fast jedem Test sehr lange im Status "Queued" blieb (bis zu 1,5 Stunden) und anschließend sobald der Status auf "Running" ging nach einer Stunde abgebrochen ist und folgende Meldung ausgab:

```
##[error]The job running on agent Hosted Agent ran longer than the maximum time of 60 minutes. For more information, see https://go.microsoft.com/fwlink/?linkid=2077134
```

Daraufhin habe ich den Timestamp manuell erhöht auf 180 Minuten.
Jedoch ist daraufhin der Prozess nach ca. 1,5 Stunden (der "Running" Prozess) abgebrochen.

Dieses Problem hatte ich mehrere Wochen. Die folgende Fehlermeldung wurde mir ausgegeben:

```
##[error]We stopped hearing from agent Hosted Agent. Verify the agent machine is running and has a healthy network connection. Anything that terminates an agent process, starves it for CPU, or blocks its network access can cause this error. For more information, see: https://go.microsoft.com/fwlink/?linkid=846610
Pool: Azure Pipelines
Image: ubuntu-latest
Agent: Hosted Agent
Started: Today at 13:19
Duration: 1h 14m 57s

Job preparation parameters
ContinueOnError: False
TimeoutInMinutes: 180
CancelTimeoutInMinutes: 5
Expand:
  MaxConcurrency: 0
  ########## System Pipeline Decorator(s) ##########
 
 Begin evaluating template 'system-pre-steps.yml'
Evaluating: eq('true', variables['system.debugContext'])
Expanded: eq('true', Null)
Result: False
Evaluating: resources['repositories']['self']
Expanded: Object
Result: True
Evaluating: not(containsValue(job['steps']['*']['task']['id'], '6d15af64-176c-496d-b583-fd2ae21d4df4'))
Expanded: not(containsValue(Object, '6d15af64-176c-496d-b583-fd2ae21d4df4'))
Result: True
Evaluating: resources['repositories']['self']['checkoutOptions']
Result: Object
Evaluating: pair['key']
Result: 'fetchDepth'
Evaluating: pair['value']
Result: '1'
Finished evaluating template 'system-pre-steps.yml'
********************************************************************************
Template and static variable resolution complete. Final runtime YAML document:
steps:
- task: 6d15af64-176c-496d-b583-fd2ae21d4df4@1
  inputs:
    repository: self
    fetchDepth: 1


  MaxConcurrency: 0
```

Ich habe dabei mehrere Lösungsansetze probiert. 

Ich habe folgendes versucht:

- mehrmals versucht Code anzupassen
- auf Notebook Ressoucen geachtet (CPU, Arbeitsspeicher, Netzwerkverbindung)
- die Firewall deaktiviert
- neuen Agenten erstellt

Der aktuelle AgentPool ![AgentPool_ _Agent](https://github.com/RatteF/Software-Deployment-Lab2/assets/83348757/c6312b35-ded8-4409-b374-1b5de56190df)

Den letzten Punkt habe ich erst am 16.11. probiert und auch dabei hatte ich wieder die sehr langen Zeiten in den Status "Queued" und "Running". Ich konnte ab diesen Punkt aus zeitlichen Gründen nicht weiterarbeiten. Die Wartezeit wurde jedoch schlimmer.

Hier ist einmal ein Ausschnitt während des "Running" Status
![WartezeitRunning2](https://github.com/RatteF/Software-Deployment-Lab2/assets/83348757/0c7ab984-2f93-4047-b7c7-0e1af2afb09b)


Hier einmal die Standarddomäne meiner WebApp: lab2pipelines.azurewebsites.net

Und einmal ein Screenshoot dieser:
![WebApp](https://github.com/RatteF/Software-Deployment-Lab2/assets/83348757/e369d547-dfbb-46a3-af06-21143a481e18)
