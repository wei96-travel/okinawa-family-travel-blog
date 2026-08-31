Option Explicit

Const SSFMCreateForWrite = 3
Const SAFT48kHz16BitMono = 38

Dim voice, stream, token, outputPath, scriptText
outputPath = WScript.Arguments(0)

Set voice = CreateObject("SAPI.SpVoice")
For Each token In voice.GetVoices
  If InStr(token.GetDescription, "Hanhan") > 0 Then
    Set voice.Voice = token
    Exit For
  End If
Next

voice.Rate = 3
voice.Volume = 95

scriptText = ChrW(&H7F8E) & ChrW(&H9E97) & ChrW(&H6D77) & ChrW(&H4E4B) & ChrW(&H5F8C) & ChrW(&H53EA) & ChrW(&H5269) & ChrW(&H534A) & ChrW(&H5929) & ChrW(&HFF0C) & ChrW(&H53E4) & ChrW(&H5B87) & ChrW(&H5229) & ChrW(&H5CF6) & ChrW(&H9084) & ChrW(&H662F) & ChrW(&H540D) & ChrW(&H8B77) & ChrW(&HFF1F) & ChrW(&H60F3) & ChrW(&H770B) & ChrW(&H6D77) & ChrW(&HFF0C) & ChrW(&H9078) & ChrW(&H53E4) & ChrW(&H5B87) & ChrW(&H5229) & ChrW(&H5CF6) & ChrW(&H3002) & ChrW(&H60F3) & ChrW(&H5403) & ChrW(&H98EF) & ChrW(&H3001) & ChrW(&H4F11) & ChrW(&H606F) & ChrW(&H6216) & ChrW(&H88DC) & ChrW(&H6771) & ChrW(&H897F) & ChrW(&HFF0C) & ChrW(&H7559) & ChrW(&H5728) & ChrW(&H540D) & ChrW(&H8B77) & ChrW(&H3002) & ChrW(&H5DF2) & ChrW(&H7D93) & ChrW(&H7D2F) & ChrW(&H4E86) & ChrW(&HFF0C) & ChrW(&H5169) & ChrW(&H500B) & ChrW(&H90FD) & ChrW(&H4E0D) & ChrW(&H7528) & ChrW(&H786C) & ChrW(&H585E) & ChrW(&H3002)

Set stream = CreateObject("SAPI.SpFileStream")
stream.Format.Type = SAFT48kHz16BitMono
stream.Open outputPath, SSFMCreateForWrite, False
Set voice.AudioOutputStream = stream
voice.Speak scriptText
stream.Close

