/* ============================================================
   Configurazione di MathJax per le schede.
   ------------------------------------------------------------
   Va inclusa PRIMA dello script di MathJax:

     <script src="../../js/mathjax-config.js"></script>
     <script id="MathJax-script" async
             src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

   Abilita alcuni comandi che il pacchetto base non carica da solo:
     - cancel     -> \cancel, \bcancel, \xcancel, \cancelto
     - color      -> \color, \textcolor
     - boldsymbol -> \boldsymbol
   Per aggiungerne altri, inserisci il nome sia in "load" (come
   '[tex]/nome') sia in "packages".
   ============================================================ */
window.MathJax = {
  loader: {
    load: ['[tex]/cancel', '[tex]/color', '[tex]/boldsymbol']
  },
  tex: {
    packages: { '[+]': ['cancel', 'color', 'boldsymbol'] }
    /* Delimitatori (già quelli di default):
       inlineMath:  [['\\(', '\\)']]
       displayMath: [['\\[', '\\]']]  */
  }
};
