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

scriptText = ChrW(&H5E36) & ChrW(&H5B69) & ChrW(&H5B50) & ChrW(&H8DD1) & ChrW(&H6C96) & ChrW(&H7E69) & ChrW(&H5317) & ChrW(&H90E8) & ChrW(&HFF0C) & ChrW(&H6700) & ChrW(&H96E3) & ChrW(&H7684) & ChrW(&H4E0D) & ChrW(&H662F) & ChrW(&H9078) & ChrW(&H666F) & ChrW(&H9EDE) & ChrW(&H3002) & _
  ChrW(&H662F) & ChrW(&H4ED6) & ChrW(&H5728) & ChrW(&H8ECA) & ChrW(&H4E0A) & ChrW(&H7761) & ChrW(&H8457) & ChrW(&H6642) & ChrW(&HFF0C) & ChrW(&H4F60) & ChrW(&H8981) & ChrW(&H4E0D) & ChrW(&H8981) & ChrW(&H53EB) & ChrW(&H9192) & ChrW(&H3002) & _
  ChrW(&H7F8E) & ChrW(&H9E97) & ChrW(&H6D77) & ChrW(&H8D70) & ChrW(&H5B8C) & ChrW(&HFF0C) & ChrW(&H5F8C) & ChrW(&H9762) & ChrW(&H53EA) & ChrW(&H7559) & ChrW(&H4E00) & ChrW(&H500B) & ChrW(&H5099) & ChrW(&H9078) & ChrW(&H3002) & _
  ChrW(&H4F60) & ChrW(&H6703) & ChrW(&H7E7C) & ChrW(&H7E8C) & ChrW(&H73A9) & ChrW(&HFF0C) & ChrW(&H9084) & ChrW(&H662F) & ChrW(&H76F4) & ChrW(&H63A5) & ChrW(&H56DE) & ChrW(&H98EF) & ChrW(&H5E97) & ChrW(&HFF1F)

Set stream = CreateObject("SAPI.SpFileStream")
stream.Format.Type = SAFT48kHz16BitMono
stream.Open outputPath, SSFMCreateForWrite, False
Set voice.AudioOutputStream = stream
voice.Speak scriptText
stream.Close
