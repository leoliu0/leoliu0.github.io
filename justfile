compile:
	latexmk -pdf LeoLiu_CV.tex
	latexmk -c
viewpdf:
	zathura LeoLiu_CV.pdf --fork
cleanup:
	latexmk -c
	rm *.fls || true
	rm *.log || true
