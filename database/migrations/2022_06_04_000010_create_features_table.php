<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeaturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('price');
            $table->dateTime('deadline');
            /* unsignedBigInteger */
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('validation_id');
            $table->unsignedBigInteger('lead_id');
            /* foreign */
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('validation_id')->references('id')->on('validations')->onDelete('restrict');
            $table->foreign('lead_id')->references('id')->on('leads')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('features');
    }
}
