import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingServiceService } from '../../services/loading-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  isLoading: Subject<boolean> = this.loadingService.isLoading;

  constructor(private loadingService: LoadingServiceService) {}

  ngOnInit() {}
}
