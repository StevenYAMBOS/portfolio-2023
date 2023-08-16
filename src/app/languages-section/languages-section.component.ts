import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'languages-section',
  templateUrl: './languages-section.component.html',
  styleUrls: ['./languages-section.component.css']
})
export class LanguagesSectionComponent implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    const modals = this.elRef.nativeElement.querySelectorAll(".modal");
    const buttons = this.elRef.nativeElement.querySelectorAll(".grid-item");
    const spans = this.elRef.nativeElement.querySelectorAll(".close");

    // Fonction pour ouvrir la modale en fonction de l'index
    function openModal(index: number) {
      modals[index].style.display = "block";
    }

    // Fonction pour fermer toutes les modales
    function closeModal() {
      modals.forEach((modal: any) => {
        modal.style.display = "none";
      });
    }

    buttons.forEach((button: any, index: number) => {
      button.onclick = () => openModal(index);
    });

    spans.forEach((span: any) => {
      span.onclick = closeModal;
    });

    window.onclick = (event: any) => {
      modals.forEach((modal: any) => {
        if (event.target === modal) {
          closeModal();
        }
      });
    };
  }
}
