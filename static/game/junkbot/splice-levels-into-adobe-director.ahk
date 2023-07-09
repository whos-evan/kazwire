#SingleInstance force
SetTitleMatchMode 2
StringCaseSense, On
SetKeyDelay, 100

;--------------------------------------------------------
; JUNKBOT LEVEL SPLICING
;--------------------------------------------------------
^Insert::
	if WinExist("junkbot - Adobe Director")
	{
	    WinActivate
	}
	else {
		MsgBox junkbot.dir must be open in Adobe Director
		return
	}

	; Assumption: Cast:levels panel is open, and view is set to list, and ordered by number
	MsgBox, 4,, This script assumes the Cast panel is open, showing levels cast, and the view is set to list, and ordered by number.`n`nWould you like to continue?
	IfMsgBox No
    {
	    return
	}

	; Go to first level slot
	Send ^3^3{Home}
	
	Loop, Files, C:\JunkbotLevels\*.txt, F
	{
		FileRead, LevelContent, %A_LoopFileLongPath%
		Clipboard := LevelContent
		WinActivate, junkbot - Adobe Director
		; Go to next level slot
		Send ^3^3{Down}
		; Open text editor and replace level contents
		Send {Enter}^a^v
		; Rename cast member
		;Send {F2}%A_LoopFileName%{Enter}
	}
return

;--------------------------------------------------------
; EDIT THIS SCRIPT
;--------------------------------------------------------
; ^!e::
; 	; C:\Program Files (x86)\Notepad++\notepad++.exe
; 	Run "C:\Program Files\Sublime Text 3\sublime_text.exe" "%a_scriptdir%\%a_scriptname%"
; return

;--------------------------------------------------------
; AUTO RELOAD THIS SCRIPT
;--------------------------------------------------------
~^s::
	IfWinActive, %a_scriptname%
	{
		SplashTextOn,,,Reloading %a_scriptname%
		Sleep 500
		SplashTextOff
		Reload
	}
return
